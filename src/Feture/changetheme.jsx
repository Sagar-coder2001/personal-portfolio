import { createSlice } from '@reduxjs/toolkit';

// Retrieve initial theme from localStorage, or use default
const storedTheme = localStorage.getItem('theme') || 'dark';
const initialState = storedTheme === 'white' ? {
  value: 'white',
  navbar: '#d3e0dc',
  textcolor: 'black'
} : {
  value: '#0E1027',
  navbar: 'black',
  textcolor: 'white'
};

export const changetheme = createSlice({
  name: 'changetheme',
  initialState,
  reducers: {
    white: (state) => {
      state.value = 'white';
      state.navbar = '#d3e0dc';
      state.textcolor = 'black';
      localStorage.setItem('theme', 'white'); // Store in localStorage
    },
    dark: (state) => {
      state.value = '#0E1027';
      state.navbar = 'black';
      state.textcolor = 'white';
      localStorage.setItem('theme', 'dark'); // Store in localStorage
    },
  },
});

export const { white, dark } = changetheme.actions;
export default changetheme.reducer;
