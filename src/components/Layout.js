import { useParams } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

export default function Layout({ children }) {
    const params = useParams();
    return (
    <div className="app">
      <Header/>
      <div className="bcontainer row">
        <Sidebar/>
        {children}
      </div>
    </div>
    );
}