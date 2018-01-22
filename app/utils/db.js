class DB {
  findAccount(wallet) {
    return {
      success: 1,
      user: {
        wallet,
        name: 'Uni Corn',
        email: 'smart@unicorn.com'
      }
    }
  }
}

export default new DB()
