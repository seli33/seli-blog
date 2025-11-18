const { id } = useParams();
const navigate = useNavigate();

const [title, setTitle] = useState("");
const [body, setBody] = useState("");
const [author, setAuthor] = useState("");

    const Edit=(e)=>{
        e=PreventDefault();
        const blog={title,body,author}
        fetch('http://localhost:5000/blogs/'+blog.id,{
            method:'PATCH',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            navigate('/');
        })
    }

export default Edit;