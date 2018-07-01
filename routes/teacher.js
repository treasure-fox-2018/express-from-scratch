const express = require ('express')
const router = express.Router()

router.get('/', (req, res) => {
    let data = [{ name: 'asd', email: 'asd@asd.asd' }, 
                { name: 'Wisnu', email: 'wisnu@hotwheel.com' }, 
                {name: 'Wahyu', email: 'wahyu@gmail.com'}]
    res.render('teacher', {dataTeacher : data})
})

module.exports = router