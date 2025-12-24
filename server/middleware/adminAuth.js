import jwt from "jsonwebtoken";

const adminAuth = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization || req.headers.Authorization;
        let token = null;
        if (authHeader) {
            if (typeof authHeader === 'string' && authHeader.startsWith('Bearer ')) {
                token = authHeader.split(' ')[1];
            } else {
                token = authHeader;
            }
        }

        if (!token) {
            return res.status(401).json({success: false, message: "No token provided"});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (decoded.role !== 'admin') {
            return res.status(403).json({success: false, message: "Forbidden"});
        }

        req.userId = decoded.id || decoded._id || decoded.userId;
        next();
    } catch (error) {
        return res.status(401).json({success: false, message: "Invalid token"});
    }
}

export default adminAuth;
