import { db } from "./index";
import { eq } from "drizzle-orm";
import {  
    users,
    comments,
    products,
    type NewUser,
    type NewComment,
    type NewProduct, 
} from "./schema";

// USER QUERIES
export const createUser = async (data: NewUser) => {
  const [user] = await db.insert(users).values(data).returning();
  return user;
};