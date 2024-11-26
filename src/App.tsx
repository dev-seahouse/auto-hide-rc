import React from "react";
import Overflow from "rc-overflow";
import { Avatar, Tooltip } from "antd";

interface User {
  id: string;
  name: string;
  avatar: string;
}

interface UserOverflowProps {
  users: User[];
  maxWidth?: number;
  className?: string;
}

const mockUsers = [
  {
    id: "1",
    name: "当劳",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=1",
  },
  {
    id: "2",
    name: "吴三三",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=2",
  },
  {
    id: "3",
    name: "江一一",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=3",
  },
  {
    id: "4",
    name: "张四",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=4",
  },
  {
    id: "5",
    name: "李五",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=5",
  },
];

const UserOverflow: React.FC<UserOverflowProps> = ({
  users,
  maxWidth = 400,
}) => {
  const renderItem = (user: User) => {
    return (
      <div style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
        <Avatar size="small" src={user.avatar}>
          {user.name[0]}
        </Avatar>
        <span style={{ fontSize: "14px", whiteSpace: "nowrap" }}>
          {user.name}
        </span>
      </div>
    );
  };

  const renderRest = (omittedItems: User[]) => {
    return (
      <Tooltip
        title={
          <div style={{ padding: "8px 0" }}>
            {omittedItems.map((user, index) => (
              <div
                key={user.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: index === omittedItems.length - 1 ? 0 : "8px",
                }}
              >
                <Avatar size="small" src={user.avatar}>
                  {user.name[0]}
                </Avatar>
                <span style={{ color: "white", whiteSpace: "nowrap" }}>
                  {user.name}
                </span>
              </div>
            ))}
          </div>
        }
        placement="bottom"
      >
        <div style={{ display: "inline-flex", alignItems: "center" }}>
          <Avatar.Group>
            <Avatar
              size="small"
              style={{ backgroundColor: "#e5e7eb", color: "#4b5563" }}
            >
              +{omittedItems.length}
            </Avatar>
          </Avatar.Group>
        </div>
      </Tooltip>
    );
  };

  return (
    <div
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
        padding: "16px",
        backgroundColor: "white",
        maxWidth,
      }}
    >
      <Overflow
        style={{ display: "flex", alignItems: "center", gap: "8px" }}
        data={users}
        renderItem={renderItem}
        maxCount="responsive"
        renderRest={renderRest}
      />
    </div>
  );
};

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f3f4f6",
        padding: "32px",
      }}
    >
      <div
        style={{
          maxWidth: "896px",
          margin: "0 auto",
        }}
      >
        <div style={{ marginBottom: "32px" }}>
          <h2
            style={{
              fontSize: "18px",
              fontWeight: 600,
              marginBottom: "16px",
            }}
          >
            Full Width Container
          </h2>
          <UserOverflow users={mockUsers} maxWidth={800} />
        </div>

        <div style={{ marginBottom: "32px" }}>
          <h2
            style={{
              fontSize: "18px",
              fontWeight: 600,
              marginBottom: "16px",
            }}
          >
            Medium Width Container
          </h2>
          <UserOverflow users={mockUsers} maxWidth={400} />
        </div>

        <div style={{ marginBottom: "32px" }}>
          <h2
            style={{
              fontSize: "18px",
              fontWeight: 600,
              marginBottom: "16px",
            }}
          >
            Small Width Container
          </h2>
          <UserOverflow users={mockUsers} maxWidth={200} />
        </div>
      </div>
    </div>
  );
}

export default App;
