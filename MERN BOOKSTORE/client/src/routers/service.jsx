import axios from "axios";

class Service {
  createUser(data) {
    return axios.post("http://localhost:5000/Register", data);
  }

  createReview(data) {
    return axios.post("http://localhost:5000/add-review", data);
  }

  updateReview(id, data) {
    return axios.patch(`http://localhost:5000/review/${id}`, data);
  }

  deleteReview(id) {
    return axios.delete(`http://localhost:5000/delete-review/${id}`, {
      // data: { user_id: userId },
    });
  }
  getReviewsById(id) {
    return axios.get(`http://localhost:5000/reviews?bookId=${id}`, {
      // data: { user_id: userId },
    });
  }
}
export default new Service();
