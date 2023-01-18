import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector, TypedUseSelectorHook} from "react-redux";
import { addComment, Dislike, fetchedGalleryData, Like } from "../Redux_toolkit/gallerySlice";
import { storeProps } from "../typreprops";

const Gallery = () => {

  const useAppSelector: TypedUseSelectorHook<storeProps> = useSelector;
  const store = useAppSelector((store) => store);
  const dispatch=useDispatch();
  const inpRef=useRef<HTMLInputElement[]>([]);
  console.log(store);
  
  useEffect(() => {
    
    dispatch<any>(fetchedGalleryData());
  }, []);
  useEffect(()=>{
    localStorage.setItem('posts',JSON.stringify(store.imageGalleryReducer.posts))
  },[store])

  const addCommentUser = (i:number) => {
  
    if ( inpRef.current!==null ) {
      dispatch(addComment({ ind: i, comment: inpRef.current[i].value}));
      inpRef.current[i].value=" ";
    }
  };
  const like=(i:number)=>{
    dispatch(Like(i));
  }
  const dislike=(i:number)=>{
    
    dispatch<any>(Dislike(i));
  }
  return (
<>
   {store.imageGalleryReducer.posts.map((item,i)=>{
    console.log(item.comments);
    return(<>
      <div className="col-7 m-auto container text-center border mt-4  p-2">
       <img
        alt="1"
        height="300px"
        width="90%"
        src={item.src}
      />
      <div className="col-11 container  border mt-4 p-4 text-center">
        <span onClick={()=>like(i)}>
        {item.like ?<><i className="bi bi-hand-thumbs-up-fill fs-3 pe-2"></i></>:<><i className="bi bi-hand-thumbs-up fs-3 pe-2"></i></>}
        </span>
        <span onClick={()=>dislike(i)}>
        {item.dislike?<i className="bi bi-hand-thumbs-down-fill fs-3"></i>:<i className="bi bi-hand-thumbs-down fs-3"></i>}
        </span>
      </div>
     
      <div className="col-8 m-auto pe-5 ps-5 pt-3 ">
      <div className="input-group ">
        <input
        ref={(item)=> {item!==null && inpRef.current.push(item)}}
          type="text"
          className="form-control"
          aria-label="Dollar amount (with dot and two decimal places)"
        />
        <span className="input-group-text" onClick={()=>addCommentUser(i)}>Comment</span>
      </div>
      {item.comments.length>0?item.comments.map((com)=>{
        return(<>
        <p className="text-start mt-4">{com}</p>
        </>)
      }):<p></p>}
      </div>
      </div>
    </>)
   })}
     
     </>

  );
};

export default Gallery;
