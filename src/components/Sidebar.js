import { useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsPlus } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../store/notes/actions";
import { formatDate } from "../helpers/DateHelper";

export default function Sidebar() {
    const { note } = useSelector(state=>state);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const Untitled = {
        title: "Untitled",
        description: "",
        date: new Date()
    }
    
    const addNoteHandler = () =>{       
        dispatch(addNote(Untitled))
        navigate(`/notes/edit/0`);

    }

    const getWords = (str) => {
        const plainText = str.replace(/<[^>]+>/g, '');
        return plainText.split(' ').slice(0, 15).join(' ');
    }

    return (
        <div className="sidebar col-md-2">
            <div className="btn-plus d-flex justify-content-between">
                <span className="btn-plus-text ml-2">Notes</span>
                <span 
                    onClick={addNoteHandler} 
                    className="btn-plus-icon"
                >
                    <BsPlus size={25}/>
                </span>
            </div>

            {
                note?.list?.length>0 ? (
                    <ul>
                    { note?.list?.map((nt, index)=>(
                        <li key={index}>
                            <Link to={`/notes/${index}`}>{nt.title}</Link>
                            <span>{formatDate(nt.date)}</span>
                            {
                                nt?.description && <h6>{ getWords(nt.description) }</h6>
                            }
                        </li>
                    ))
                    
                    }
                    </ul>
                ): (
                <h6 className="no-notes">You have no notes yet</h6>
                )
            }
        </div>
    );
}
