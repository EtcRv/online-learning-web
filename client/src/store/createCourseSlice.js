import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  current_course_id: "",
  intended_learners: {
    learning_object: ["", "", "", ""],
    required_skills: "",
    course_for: "",
  },
  landing_page: {
    course_title: "New Course",
    course_sub_title: "",
    course_description: "",
    basic_info: {
      language: "English (US)",
      level: "-- Select Level --",
      category: "-- Select Category --",
    },
    primarily_taught: "",
    course_image: "",
    promotional_video: "",
  },
  price: "Free",
  course_messages: {
    welcome_message: "",
    congratulation_message: "",
  },
};

const createCourseSlice = createSlice({
  name: "create course",
  initialState,
  reducers: {
    updateState(state, action) {
      const { type, value } = action.payload;
      if (type === "intended_learners") state.intended_learners = value;
      else if (type === "landing_page") state.landing_page = value;
      else if (type === "price") state.price = value;
      else if (type === "course_messages") state.course_messages = value;
    },
    updateCurrentCourseId(state, action) {
      const { courseId } = action.payload;
      state.current_course_id = courseId;
    },
  },
});

export const { updateState, updateCurrentCourseId } = createCourseSlice.actions;

export default createCourseSlice.reducer;
