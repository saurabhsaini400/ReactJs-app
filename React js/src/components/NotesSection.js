import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import NoteItem from './NoteItem';
import inputActions from '../redux/actions/inputActions';
import './NotesSection.style.scss';

const NotesSection = () => {
const dispatch = useDispatch();
const notes = useSelector(state => state.notes.notes)
const [count, setCount] = useState(0);//inouo

const onItemClicked =(item, index) => {
  dispatch(inputActions.setInputId(index));
  dispatch(inputActions.setInputTitle(item.title));
  dispatch(inputActions.setInputContent(item.content));
}
if(notes.length ===0){
    return (
        <div className='NotesSection__container__empty'>
            <p>There is no notes available.</p>
        </div>
    )
}  

return (
    <div className='NotesSection__container'>
      
      


      {notes.map((item,index)=>{
        if(item){
          return (
            <>
            <div>
              <p>You liked {count} times</p>
              <button  class="button-9" role="button"
              
              onClick={() => setCount(count + 1)}>
                Like
              </button>
            </div>
            <NoteItem 
            title={item.title}
            // content= {item.content}
            onItemClicked={() =>{
              onItemClicked(item, index);
            }}
            
        />
        </>
          )
        }
        return null;
      }
        
      )}
      
    </div>
  );
};

export default NotesSection
