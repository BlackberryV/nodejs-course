import { Response, Request } from "express";
import { validationResult } from "express-validator";

import { UserModel } from "../models/User";

export const login = async (req: Request, res: Response) => {
  try {
    const user = await UserModel.findOne({
      email: req.body.email,
      password: req.body.password,
    });

    if (!user) {
      return res.status(404).json({ error: "wrong email or password" });
    }

    return res.status(200).json(user);
  } catch (e) {
    console.log(e);
    res.status(500).json("sth went wrong");
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json(errors);
    }

    const doc = new UserModel(req.body);

    const user = await doc.save();

    return res.status(201).json(user);
  } catch (e) {
    console.log(e);
    res.status(500).json("sth went wrong");
  }
};

// export const getAllUsers = async (req: Request, res: Response) => {
//   try {
//     const users = await UserModel.find();

//     return res.status(200).json(users);
//   } catch (e) {
//     return res.status(500).json("sth went wrong");
//   }
// };

export const getUserByPassportId = async (req: Request, res: Response) => {
  try {
    const passportId = req.params.passportId;

    console.log(req.params);

    const user = await UserModel.findOne({ passportId });

    if (!user) return res.status(404).json({ message: "user not found" });

    return res.status(200).json(user);
  } catch (e) {
    return res.status(500).json("sth went wrong");
  }};

  

  export const getUsers = async (req: Request, res: Response) => {
    try {
      const filters = req.query; 
  
      if (Object.keys(filters).length > 0) {
       
        const users = await getUsersWithFilter(filters);
        return res.status(200).json(users);
      } else {
      
        const users = await getAllUsers();
        return res.status(200).json(users);
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json("Something went wrong");
    }
  };
  
  const getAllUsers = async () => {
    return UserModel.find();
  };
  
  const getUsersWithFilter = async (filters: any) => {
    return UserModel.find(filters);
  };

  export const deleteUser = async (req: Request, res: Response) => {
    try {
      const userId = req.params.id;
  
      
      await UserModel.findByIdAndRemove(userId);
  
      return res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json("Something went wrong");
    }
  };
  
  export const updateUser = async (req: Request, res: Response) => {
    try {
      const userId = req.params.id;
      const { fullname, passportId, email, password } = req.body;
  
      
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
    
      await UserModel.findByIdAndUpdate(userId, { fullname, passportId, email, password });
  
      return res.status(200).json({ message: 'User updated successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json("Something went wrong");
    }
  };

