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
        <div className="p-2 sm:p-8 md:p-16 lg:p-24 xl:p-32 2xl:p-64">
          <NikkeSelector />
          <Input />
          <Interactions />
        </div>
      </Background>
    </NikkeListProvider>
  );
}

export default App;
