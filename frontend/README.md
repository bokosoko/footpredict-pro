# FootPredict Pro Frontend (GitHub Pages)

## Local Development

```bash
cd frontend
npm install
npm start
```

## Production Deployment (GitHub Pages)

1. Set "homepage" in `package.json` to your repo URL:
   ```
   "homepage": "https://bokosoko.github.io/footpredict-pro"
   ```

2. Build the app:
   ```bash
   npm run build
   ```

3. Push the contents of the `build/` folder to the `gh-pages` branch.

4. Add `.nojekyll` file to the root of `build/`.

5. Your site will be live at:
   ```
   https://bokosoko.github.io/footpredict-pro/
   ```

## Note

- **Prediction API:** This static frontend needs a backend to provide predictions.
- Change `API_URL` in `src/pages/Predict.js` to your deployed backend API.
