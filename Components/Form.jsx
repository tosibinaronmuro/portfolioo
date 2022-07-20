import React,{useEffect, useRef} from "react";
import axios from "axios";
// import { motion } from "framer-motion"
 
 

function Form({onsubmit}) {
  const NameRef = useRef(null);
  const EmailRef = useRef(null);
  const SubjectRef = useRef(null);
  const MessageRef = useRef(null);
    const [data, setdata] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [sent, setsent] = React.useState(false);
     


      onsubmit=(e)=>{
    e.preventDefault()
    const Name = NameRef.current.value;
    const Email = EmailRef.current.value;
    const Subject = SubjectRef.current.value;
    const Message = MessageRef.current.value;
        setLoading(true)
        setsent(true)
      setdata ({
     name:Name,
      email:Email,
      phone:Subject,
      message:Message

      })
      
      
       
        }
         
     useEffect(()=>{
      
      const postData = async ()=>{
        try {
           
          const res = await axios.post("https://emailtosiron.herokuapp.com/tosmon/email",
            data
         
          )
          
        setLoading(false)
      
      
        NameRef.current.value="";
        EmailRef.current.value="";
        SubjectRef.current.value="";
        MessageRef.current.value="";
        
 
        } catch (error) {
          console.log(error)
        }
      }
      postData()
     },[onsubmit])

    const onchange=(e)=>{
      setsent(false)}

  return (
    <div className=" pr-3 w-screen      ">
      
      <form className="pr-10" onChange={onchange} onSubmit={onsubmit}>
        <div className="relative z-0 mb-6 w-full lg:w-1/2 group">
          <input
            type="text"
            name="name"
            id="floating_first_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
            placeholder=" "  ref={NameRef}
          ></input>
          <label
            htmlFor="floating_first_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Your Name
          </label>
        </div>
        <div className="relative z-0 mb-6 w-full lg:w-1/2 group">
          <input
            type="email"
            name="email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
            placeholder=" " ref={EmailRef}
          ></input>
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Your Email address
          </label>
        </div>
        <div className="lg:w-1/2">
        <label
          htmlFor="subject"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
         Subject
        </label>
        <textarea
          id="subject"
          name="phone"
          rows="1"
          className="block mb-5 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
          placeholder="Message subject" ref={SubjectRef}
        ></textarea>
        </div>

        <div className="lg:w-1/2">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Your message
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          className="block mb-5 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
          placeholder="Leave a comment..." ref={MessageRef}
        ></textarea>
        </div>

    {loading? <button disabled type="button" className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm w-full lg:w-1/2 sm:w-auto px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">
    <svg aria-hidden="true" role="status" className="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
    </svg>
    Loading...
</button>: <div className="flex  "> <button
          type="submit"
          className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm w-full lg:w-1/2 sm:w-auto px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
        >
          Submit
        </button> </div> }
<div className=" w-full lg:w-1/2 flex justify-center m-4">
{sent && <div  className="  flex justify-center rounded-full ml-2 text-white bg-green-700   w-auto   p-2 text-center dark:bg-green-600 dark:text-white dark:hover:bg-green-700 dark:focus:ring-green-800"><svg className=" w-6 h-6 flex justify-center  " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg> <span className="px-2"> Sent</span></div>}
    
</div>

   </form>
      
      
    </div>
  );
}

export default Form;
