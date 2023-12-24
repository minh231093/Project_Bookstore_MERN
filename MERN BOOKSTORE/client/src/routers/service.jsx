import axios from "axios";

class Service {
  createUser(data) {
    return axios.post("/Register", data);
  }

  createReview(data) {
    return axios.post("/add-review", data);
  }

  updateReview(id, data) {
    return axios.patch(`/review/${id}`, data);
  }

  deleteReview(id) {
    return axios.delete(`/delete-review/${id}`, {
      // data: { user_id: userId },
    });
  }
  getReviewsById(id) {
    return axios.get(`/reviews?bookId=${id}`, {
      // data: { user_id: userId },
    });
  }
}
export default new Service();
