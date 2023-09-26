// const ChatsPage = () => {
//     return <div className="background">chats...</div>;
//   };
//   export default ChatsPage;

import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from "react-chat-engine-advanced";

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    "316a9bd5-022d-42c0-8e7a-9c7cb7de8920",
    props.user.username,
    props.user.secret
  );
  return (
    <div style={{ height: "100vh" }}>
      <MultiChatWindow {...chatProps} />
      <MultiChatSocket {...chatProps} />
    </div>
  );
};
export default ChatsPage;
