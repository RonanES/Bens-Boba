const Contact = () => {
    return ( 
        <div className="contact">
            <h1>Contact us!</h1>
            <div className="form">
            <h2>Subject</h2>
            <input type="text" name="comment" />
            <h2>Comment</h2>
            <textarea></textarea>
            <h2>Name</h2>
            <input type="text" name="comment" />
            <div><a href="/confirm">Submit!</a></div>
            
            </div>
        </div>
     );
}
 
export default Contact;