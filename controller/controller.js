
const controlar = {
    home: (req,res) => {
      return  res.render('index')
    },
    cadastro: (req,res) => {
      return  res.render('cadastro')
    }
}

module.exports = controlar