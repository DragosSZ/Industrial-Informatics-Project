import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import AppRouter from './router';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <AppRouter />
            </Layout>
        </BrowserRouter>
    );
}

export default App;