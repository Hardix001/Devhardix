

export default function Contact() {
  return (
    <div className="contact">
        <h3>Contact Us</h3>
        <form>
            <label>
                <span>Your email:</span>
                <input type="mail" name="email" required placeholder="Enter your name"/>
            </label>

            <label>
                <span>Your Name:</span>
                <input type="name" name="Your name" required placeholder="Enter your name"/>
            </label>

            <label>
                <span>Your Message:</span>
                <textarea name="message" required placeholder="Enter your message"></textarea>
            </label>
            <button> Submit</button>

        </form>
    </div>
  )
}
