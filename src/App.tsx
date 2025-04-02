import { useEffect, useRef } from 'react';
import 'normalize.css'; 
import './styles/app.css';

function App() {
  const ref = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    ref.current.style.opacity = '1';
  }, []);

  return (
    <div ref={ref} className="page guide-page">
      <img
        alt="clu fresh" 
        className='main-pic' 
        src={require('./assets/clufresh_logo_icon_@2x.png')} 
      />
      <p className='title'>欢乐购</p>
      <img
        alt="slogan word" 
        className='sub-pic' 
        src={require('./assets/slogn_word_icon_@2x.png')} 
      />
      <div className='iconfont arrow-icon'>&#xe60c;</div>
    </div>
  );
}

export default App;