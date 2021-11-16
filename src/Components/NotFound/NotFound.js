import imgNotFound from '../../assets/not-found.jpg';
import './NotFound.css';

function NotFound() {
  return (
    <div className="NotFound mb-5 text-center">
      <img src={imgNotFound} className="img-fluid" alt="not found" />
    </div>
    );
  }
  
export default NotFound;