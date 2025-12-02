import './App.css';
import Button from "@mui/material/Button";
import { Container } from '@mui/material';
import LongMenu from '@/components/ui/PopupMenu.tsx';
function App() {
  return (
    <div className='app'>
      <Container
        style={{
          display: "flex",
          justifyContent: "flex-end",
          width: "100%",
        }}>
        <LongMenu />
      </Container>

      <Container
        maxWidth="sm"
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}>
        <Button variant="outlined">Analyze</Button>
      </Container>    </div>
  );
}

export default App;
