import Interactions from "./interaction/Interactions";
import Background from "./UI/Background";
import NikkeListProvider from "./store/NikkeListProvider";
import Input from "./UI/Input";
import Nav from "./UI/Nav";
import NikkeSelector from "./selector/NikkeSelector";

function App() {
  return (
    <NikkeListProvider>
      <Background>
        <Nav />
        <div className="p-64">
          <NikkeSelector />
          <Input />
          <Interactions />
        </div>
      </Background>
    </NikkeListProvider>
  );
}

export default App;
