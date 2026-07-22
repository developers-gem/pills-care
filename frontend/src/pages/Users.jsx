import { useEffect, useState } from "react";
import "../PagesStyle/users.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Pagination States
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        "http://localhost:5000/api/auth/admin/all-users",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        },
      );

      const result = await response.json();

      if (result.success) {
        setUsers(result.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // Pagination Logic
  const totalPages = Math.ceil(users.length / usersPerPage);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;

  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (loading) {
    return <div className="loading">Loading Users...</div>;
  }

  return (
    <div className="users-container">
      <div className="users-header">
        <div>
          <h2>All Registered Users</h2>
          <p>
            Showing {indexOfFirstUser + 1}-
            {Math.min(indexOfLastUser, users.length)} of {users.length} Users
          </p>
        </div>
      </div>

      <div className="table-wrapper">
        <table className="users-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>DOB</th>
              <th>Role</th>
            </tr>
          </thead>

          <tbody>
            {currentUsers.length > 0 ? (
              currentUsers.map((user, index) => (
                <tr key={user._id}>
                  <td>{indexOfFirstUser + index + 1}</td>

                  <td>{user.name}</td>

                  <td>{user.email}</td>

                  <td>
                    <span className={`gender ${user.gender}`}>
                      {user.gender}
                    </span>
                  </td>

                  <td>{new Date(user.dob).toLocaleDateString()}</td>

                  <td>
                    <span className="role">{user.role}</span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No Users Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}

      {totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={currentPage === index + 1 ? "active-page" : ""}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Users;
