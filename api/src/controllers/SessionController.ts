//import express from 'express';
import bcrypt from 'bcrypt';
import { User } from '../utils/types';
import UserModel from '../models/Usuario';
import UserController from '../controllers/UserController'
import TokensHelper from '../helpers/TokensHelper';

class SessionController{
    private helper: TokensHelper;
    private controller: UserController;

    ///el salt es siempre 10 -> await bcrypt.hash("prueba2024",10); 
    constructor(){
        this.helper=new TokensHelper();
        this.controller= new UserController();
    }


    public validateUser= async (data:User): Promise<any>=>{
        try {
            const email= data.email;
            
            const user= await UserModel.findOne({where:{
                email:email
            }});
          
          
            if(user){
                const dataUser=user.dataValues;
                
                const checkPassword= await bcrypt.compare(data.contrasenia,dataUser.contrasenia);

                //dataUser.id_usuario
                const typeUser = await this.controller.findOne(dataUser.id_usuario);
                //typeUser.nombre
                
                if(checkPassword){
                    const tokenSesion = await this.helper.signToken(dataUser);
                    return {
                        usuario: dataUser.email,
                        token:tokenSesion,
                        nombreUsuario: typeUser.nombre
                    };
                }
            }
            
            return undefined;

        } catch (error) {
            return new Error("Server internal error.");
        }
    }

}

export default SessionController;