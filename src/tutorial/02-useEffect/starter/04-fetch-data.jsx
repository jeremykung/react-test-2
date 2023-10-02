import { useEffect, useState } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    console.log("used effect!");
    async function fetchData() {
      try {
        const response = await fetch(url);
        const users = await response.json();
        console.log("users:", users);
        setUser(users);
      } catch (error) {
        console.log("error fetching users:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>Users</h1>
      <div>
        {users.map((user) => {
          return (
            <section key={user.id} className="users">
              <img src={user.avatar_url} />
              <h3>{user.login}</h3>
            </section>
          );
        })}
      </div>
    </>
  );
};
export default FetchData;
