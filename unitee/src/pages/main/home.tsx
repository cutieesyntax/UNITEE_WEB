import './home.css'
import home_1 from '../../assets/images/main/home_1.png'
import home_2 from '../../assets/images/main/home_2.png'
import { Link } from 'react-router-dom'
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import uchat from "../../assets/images/main/UCHAT.png"

function Home() {

    const steps = [
        {
            id: '0',
            message: 'Hey Customer!',
            trigger: '1',
        },
        {
            id: '1',
            message: 'Please state your problem',
            trigger: 'user-response',
        },
        {
            id: 'user-response',
            user: true,
            trigger: 'menu',
        },
        {
            id: 'menu',
            options: [
                { value: 'view_product', label: 'View Products', trigger: 'end-message' },
                { value: 'read_unitee', label: 'Read Unitee', trigger: 'end-message' },
                { value: 'product_recommendations', label: 'Product Recommendations', trigger: '5' },
            ],
        },
        {
            id: '5',
            message: 'Great! What type of products are you interested in?',
            trigger: '6',
        },
        {
            id: '6',
            user: true,
            trigger: 'end-message',
        },
        {
            id: 'end-message',
            message: 'Thank you for chatting with us!',
            end: true,
        },
    ];

    const theme = {
        background: '#f5f8fb',
        headerBgColor: '#0F3789',
        headerFontSize: '20px',
        botBubbleColor: '#0F3789',
        headerFontColor: 'white',
        botFontColor: 'white',
        userBubbleColor: '#38B6FF',
        userFontColor: 'black',
    };
    
    const config = {
        botAvatar: uchat,
        floating: true,
    };

    return (
        <div className="container home-container">
            <div>
                <div className='display-img goto-shop-container'>
                    <h1 style={{ fontWeight: 'bold' }}>Eat. Sleep. Code. Style.</h1>
                    <Link to='shop'>
                        <button className="btn btn-warning btn-lg button">Shop Now</button>
                    </Link>
                </div>
                <img src={home_1} className='display-img' />
            </div>
            <div>
                <img src={home_2} className='display-img' />
            </div>
            <ThemeProvider theme={theme}>
                <ChatBot
                    headerTitle="UNITEE"
                    steps={steps}
                    {...config}
                />
            </ThemeProvider>
        </div>
    );
}

export default Home