import App from './App';

const PORT = process.env.PORT || 3001;

App.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});