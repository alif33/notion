import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteNote, editNote } from '../store/notes/actions';
import { formatDate } from '../helpers/DateHelper';

function Edit() {
    const { note } = useSelector(state=>state);
    const params = useParams();
    const [title, setTitle] = useState('')
    const [timedate, setTimeDate] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        if(note?.list.length>0){
            setTitle(note?.list[params.id]?.title);
            setDescription(note?.list[params.id]?.description);
            setTimeDate(note?.list[params.id]?.date);
        }else{
            navigate('/notes')
        }

    }, [note.list])

    const handleEditNote = ()=>{        
        dispatch(editNote({
            index: parseInt(params.id),
            title,
            description,
            date: timedate
        }))
        navigate(`/notes/${params.id}`)
    }

    const deleteHandler = ()=>{
        const answer = window.confirm("Are you sure?");
        if (answer) {
            dispatch(deleteNote(parseInt(params.id)));
        } 
    }
    

    return (
        <Layout>
            <div className="col-md-10 pl-0">
                <div className="row top-bar">
                    <div className="col-md-6">
                        <input
                            type="text"
                            className="input-title"
                            value={title}
                            onChange={ e=> setTitle(e.target.value)}
                        />
                        <div className="time-container">
                            {
                                timedate && <h6>{formatDate(timedate)}</h6>
                            }
                            <input 
                                type="datetime-local" 
                                step="1" 
                                value={timedate && timedate}
                                onChange={(e)=>{
                                    setTimeDate(e.target.value) 
                                }}
                            />
                        </div>
                    </div>
                    <div className="col-md-6 float-end d-flex flex-row-reverse">
                        <span onClick={deleteHandler} className="btn-action">Delete</span>
                        <span onClick={handleEditNote} className="btn-action">Save</span>
                    </div>
                </div>
                <div className="editor-body">
                    <ReactQuill
                        value={description}
                        onChange={setDescription}
                        placeholder="Your Note Here"
                    />
                </div>
            </div>
        </Layout>
    );
}

export default Edit;