import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import toast from "react-hot-toast";

axios.defaults.baseURL = "https://the-campusvoice-server.vercel.app/";

const AppContext = createContext();

export const AppProvider = ({ children }) => { 

    const navigate = useNavigate()

    const [token,setToken] = useState(null)
    const [role, setRole] = useState(null)
    const [user, setUser] = useState(null)
    const [blogs,setBlogs] = useState([])
    const [input,setInput] = useState("")

    const setAuth = (nextToken, nextRole) => {
        setToken(nextToken);
        setRole(nextRole);
        if (nextToken) {
            localStorage.setItem('token', nextToken);
            localStorage.setItem('role', nextRole || '');
            axios.defaults.headers.common['Authorization'] = `Bearer ${nextToken}`;
        } else {
            localStorage.removeItem('token');
            localStorage.removeItem('role');
            delete axios.defaults.headers.common['Authorization'];
            setUser(null);
        }
    };

    const fetchMe = async () => {
        try {
            const { data } = await axios.get('/api/user/me');
            if (data.success) {
                setUser(data.user);
            }
        } catch (error) {
            // Silent on purpose for non-auth users
        }
    };

    const fetchBlogs = async () => {
        try {
            const {data} = await axios.get('/api/blog/all');
            data.success ? setBlogs(data.blogs) : toast.error(data.message);
        } catch (error) { 
            const msg = error?.response?.data?.message || error.message;
            toast.error(msg);
            
        }
    } 

    useEffect(() => {
        fetchBlogs();
        const storedToken = localStorage.getItem('token')
        const storedRole = localStorage.getItem('role')
        if(storedToken) {
            setToken(storedToken);
            setRole(storedRole || null);
            axios.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
            if (storedRole === 'user') {
                fetchMe();
            }
        }
    },[])
    const value = {
        axios,navigate, token,setToken, role,setRole, user,setUser, setAuth, fetchMe, blogs,setBlogs,input,setInput
    }

    return (
        <AppContext.Provider value={value}>
            {children}

        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext)
};
