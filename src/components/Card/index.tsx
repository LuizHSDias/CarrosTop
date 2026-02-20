import './styles.css'
import carImg from '../../assets/car.png'
import Button from '../Button';

function Card(){
    return (
        <div className="ct-card">
            <img src={carImg} alt="" />
            <h3>Audi Supra TT</h3>
            <p>
                <i>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quis corporis aut delectus sequi voluptatum voluptatibus laboriosam, et autem adipisci veniam cupiditate atque, aspernatur voluptas ut beatae, illo harum eum!
                </i>
            </p>
          <Button />
        </div>
    );
}

export default Card