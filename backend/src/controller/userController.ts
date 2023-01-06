import { Request, Response } from "express";
import UserService from "../service/userService";

import * as bcrypt from 'bcryptjs';
const saltRounds = 10;

export default class UserController {
  constructor(private userService = new UserService()) {}

  getToken () {
    const receiveToken = async () => {
      try {
      
      } catch (error) {
        
      }
    }
  }
}