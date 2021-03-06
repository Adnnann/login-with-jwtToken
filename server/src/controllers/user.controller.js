import User from '../models/user.model'
import _ from 'lodash'
import errorHandler from './helpers/dbErrorHandlers'


  const create = (req, res, next) => {

                const user = new User(req.body)
                user.save((err, result) => {
                    if(err) {
                       res.send({error: errorHandler.getErrorMessage(err)})
                    }else{
                        res.send({message: 'Successfuly created a new user.'})
                    }
                })
            }
            
            

const userByID = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if(err || !user){
            return res.status(404).json({error:'User not found!'})
        }
    req.profile = user;
    next()
    })
}

export default {
    create,
    userByID
}