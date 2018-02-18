
import { PartModel } from './UnicornRenderer';
import PIXI, { Application, Texture, Sprite, BLEND_MODES, Container, RenderTexture } from 'pixi.js';
import { MultiColorReplaceFilter } from '@pixi/filter-multi-color-replace';

export interface UnicornModel {
    [key: string]: PartModel;
    BDYFRM: PartModel;
    WNGFRM: PartModel;
    HOOFRM: PartModel;
    HRNFRM: PartModel;
    EYEFRM: PartModel;
    HAIFRM: PartModel;
    NOSFRM: PartModel;
    MTHFRM: PartModel;
    EARFRM: PartModel;
    STAINS: PartModel;
}

export interface PartModel {
    type: number;
    var: number;
}

export class UnicornRenderer {
    recolorShader = `

    varying vec2 vTextureCoord;
    uniform sampler2D uSampler;

    uniform float epsilon;


    uniform vec3 originalColors[1];
    uniform vec3 targetColors[1];

    void main(void)
    {
        gl_FragColor = texture2D(uSampler, vTextureCoord);

        float alpha = gl_FragColor.a;
        if (alpha < 0.0001)
        {
          return;
        }

        vec3 color = gl_FragColor.rgb / alpha;


        vec3 origColor = originalColors[0];

        vec3 colorDiff = origColor - color;

        float red = color.r;
        float green = color.g;
        float blue = color.b;
        float k = red/0.5;

        float targetRed =  targetColors[0].r*k;
        float targetGreen = targetColors[0].g*k;
        float targetBlue = targetColors[0].b*k;

        if (length(colorDiff) < epsilon)
        {

        }

        gl_FragColor = vec4(targetRed * alpha, targetGreen * alpha, targetBlue * alpha, alpha);


    }`;

    app: Application;
    baseUrl = './img/unicorns/';

    spritePool: any = {};
    texturesPool: any = {};

    unicornParts: any = {
        BDYFRM: [
            'body'
        ],

        WNGFRM: [
            'wing_left',
            'wing_right'
        ],

        HOOFRM: [
            'arm_left',
            'arm_right',
            'leg_left',
            'leg_right'
        ],

        HRNFRM: [
            'horn'
        ],
        EYEFRM: [
            'eye_left_open',
            'eye_right_open',
        ],
        HAIFRM: [
            'hair'
        ],
        NOSFRM: [
            'head',

        ],
        MTHFRM: [
            'mouth_open',

        ],
        EARFRM: [
            'ear_left',
            'ear_right'
        ],
        STAINS: [
            'pattern_arm_left',
            'pattern_arm_right',
            'pattern_body',
            'pattern_ear_left',
            'pattern_ear_right',
            'pattern_head',
            'pattern_leg_left',
            'pattern_leg_right'
        ]
    };

    drawOrder: string[] = [
        'EARFRM', 'WNGFRM', 'HOOFRM', 'BDYFRM', 'NOSFRM', 'HAIFRM', 'HRNFRM', 'EYEFRM', 'MTHFRM'
    ];

    constructor(private width: number = 680, private height: number = 800) {
        this.app = new Application(this.width, this.height, { backgroundColor: 0xFFFFFF });

    }

    destroy(): void {
        this.app.destroy();
    }

    render(unicorn: UnicornModel, color: number, callback: (result: string) => void): void {
        const loader: PIXI.loaders.Loader = new PIXI.loaders.Loader();


        for (const part in unicorn) {
            if (unicorn.hasOwnProperty(part)) {
                for (const texture of this.unicornParts[part]) {
                    let textures: string[];
                    if (part !== 'STAINS') {
                        textures = [
                            `${texture}_base`,
                            `${texture}_color`,
                            `${texture}_stroke`,
                        ];
                    } else {
                        textures = [texture];
                    }
                    // tslint:disable-next-line:no-shadowed-variable
                    for (const texture of textures) {
                        if (!this.texturesPool[`${unicorn[part].type}_${unicorn[part].var}_${texture}`]) {
                            // tslint:disable-next-line:max-line-length
                            loader.add(`${unicorn[part].type}_${unicorn[part].var}_${texture}`, `${this.baseUrl}${unicorn[part].type}/${unicorn[part].var}/${texture}.png`);
                            this.texturesPool[`${unicorn[part].type}_${unicorn[part].var}_${texture}`] = true;
                        }
                    }

                }
            }
        }

        loader.once('complete', () => {
            const container: Container = new Container();
            const mainColorFilter: MultiColorReplaceFilter = new MultiColorReplaceFilter([[0x7F7F7F, color]], 1000);
            mainColorFilter['fragmentSrc'] = this.recolorShader;

            const strokeColorFilter: MultiColorReplaceFilter = new MultiColorReplaceFilter([[0x7F7F7F, 0]], 1000);
            strokeColorFilter['fragmentSrc'] = this.recolorShader;

            const mainColorFilters = [mainColorFilter];
            const strokeColorFilters = [strokeColorFilter];

            for (const gen of this.drawOrder) {
                for (const texture of this.unicornParts[gen]) {
                    const textures = [
                        `${texture}_base`,
                        `${texture}_color`,
                        `${texture}_stroke`,
                    ];


                    const baseLayer: Sprite = this.getSprite(unicorn[gen].type, unicorn[gen].var, `${texture}_base`);
                    container.addChild(baseLayer);
                    baseLayer.filters = mainColorFilters;
                    for (const item of this.unicornParts.STAINS) {
                        if (item.indexOf(texture) !== -1) {
                            const sprite: Sprite = this.getSprite(unicorn['STAINS'].type, unicorn['STAINS'].var, item);
                            sprite.blendMode = BLEND_MODES.OVERLAY;
                            sprite.alpha = 0.2;
                            sprite.mask = baseLayer;
                            baseLayer.renderable = true;
                            container.addChild(sprite);
                        }
                    }


                    const colorLayer: Sprite = this.getSprite(unicorn[gen].type, unicorn[gen].var, `${texture}_color`);
                    container.addChild(colorLayer);

                    const strokeLayer: Sprite = this.getSprite(unicorn[gen].type, unicorn[gen].var, `${texture}_stroke`);
                    container.addChild(strokeLayer);
                    strokeLayer.filters = strokeColorFilters;



                }
            }

            const resultTexture: PIXI.RenderTexture = PIXI.RenderTexture.create(this.width, this.height);
            container.width = this.width;
            container.height = this.height;
            this.app.renderer.render(container, resultTexture);
            container.destroy(false);
            const resultSprite: Sprite = new Sprite(resultTexture);
            this.app.stage.addChild(resultSprite);
            const img: string = this.app.renderer.extract.base64(this.app.stage);
            this.app.stage.removeChild(resultSprite);
            resultSprite.destroy({ texture: true, children: true });
            callback(img);

        });

        loader.load();

    }


    getSprite(type: number, variable: number, texture: string): Sprite {
        const textureKey = `${type}_${variable}_${texture}`;
        if (!this.spritePool[textureKey]) {
            this.spritePool[textureKey] = new Sprite(Texture.from(textureKey));
        }
        return this.spritePool[textureKey];
    }


}
