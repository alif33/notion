import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { deleteNote } from '../store/notes/actions';
import Layout from '../components/Layout';
import { useEffect } from 'react';
import { formatDate } from '../helpers/DateHelper';


function View() {
    const { note } = useSelector(state=>state);
    const dispatch = useDispatch();
    const params = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        if(note.list.length===0 || 
            note.list.length === parseInt(params.id) || 
            note.list.length < parseInt(params.id))
        {
            navigate('/notes')
        }
    }, [note.list])

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
                        <h3 className="view-title">{note.list[params.id]?.title}</h3>
                        <h6>{formatDate(note.list[params.id]?.date)}</h6>
                    </div>
                    <div className="col-md-6 float-end d-flex flex-row-reverse">
                        <span onClick={deleteHandler} className="btn-action">Delete</span>
                        <span className="btn-action"><Link to={`/notes/edit/${params.id}`}>Edit</Link></span>
                    </div>
                </div>
                <div className="editor-body p-3">
                    <span dangerouslySetInnerHTML={{__html: note.list[params.id]?.description}}></span>
                </div>
            </div>
        </Layout>
    );
}

export default View;