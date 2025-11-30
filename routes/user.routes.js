const express = require("express")
const router = express.Router()
const userController = require("../controller/userController")

/**
 * @swagger
 * tags:
 * name: Users
 * descriptions: User managment
 */

/**
 * @swagger
 * /api/users:
 *  post: 
 *    tags: [Users]
 *    summary: Create a new user
 *    requestBody:
 *      required: true
 *      content: 
 *       aplication/json:
 *         schema:
 *          type: object
 *          proporties:
 *            name:
 *              type: string
 *            email: 
 *              type: string
 *            password: 
 *              type: string
 *            customer_id:
 *              type: number
 *  responses:
 *    201:
 *      description: User created succesfully
 *    400:
 *      description: Invalid input data
 *    500:
 *      description: Server error
 */
router.post("/users", userController.createUser)

/**
 * @swagger
 * /api/users:
 *   get:
 *     tags: [Users]
 *     summary: Get all users
 *     responses: 
 *       200:
 *         description: List of all users
 *       500: 
 *         description: List of all users
 */
router.get("/users", userController.getUsers)

/**
 * @swagger
 * /api/users/{id}:
 *   get: 
 *     tags: [Users]
 *     summary: Get one user by ID
 *     parameters: 
 *       - in: path
 *         name: id
 *         required: true
 *         schema: 
 *           type: integer
 *         description: User ID
 *     responses: 
 *        200:
 *          description: User found
 *        400:
 *          description: User not found
 *        500:
 *          description: Server error
 */
router.get("/users/:id", userController.getUserById)

/**
 * @swagger
 * /api/users{id}:
 *    delete: 
 *      tags: [Users]
 *      summary: Delete user ID
 *      parameters: 
 *         - in: path
 *           name: id
 *           required: true
 *           schema: 
 *             type: integer
 *           description: User ID
 *    responses: 
 *      200: 
 *        description: User deleted succesfully
 *      400: 
 *        description: User not found
 *      500: 
 *        description: Server error
 */
router.delete("/users/:id", userController.deleteUser)

/**
 * @swagger
 * /api/users/{id}:
 *   put: 
 *     tags: [Users]
 *     summary: Update user by ID
 *     parameters: 
 *       - in: path
 *         name: id
 *         required: true
 *         schema: 
 *           type: integer
 *           description: Foydalanuvchi ID raqami
 *   requestBody:
 *     required: true
 *     content: 
 *       aplication/json:
 *         schema:
 *           type: object
 *           properties:
 *             name: 
 *               type: string
 *             email: 
 *               type: string
 *             password: 
 *               type: string
 *   responses:
 *      200:
 *        description: User update succesfully
 *      400:
 *        description: User not found
 *      500:
 *        description: Server error
 */
router.put("/users/:id", userController.updateUser)

/**
 * @swagger
 * /api/users/search
 *   get: 
 *     tags: [Users]
 *     summary: Search user by name or email
 *     description: Foydalanuvchilarni ismi yoki email orqali qidiriladi
 *     parameters: 
 *       - in: query
 *         name: query
 *         required: true
 *         schema: 
 *           type: string
 *         description: Qidiruv so'zi (ism yoki emailning bir qismi)
 *     responses: 
 *       200: 
 *        description: Topilgan foydalanuvchilar ro'yxati
 *       400:
 *        description: Qidiruv so'zi kiritilmagan
 *       500: 
 *        description: Server xatosi
 */
router.get("/users/search", userController.searchUsers)

module.exports = router