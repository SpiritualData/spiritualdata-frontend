# Troubleshooting Guide for SpiritualData Frontend

## Authentication Issues

### 1. Clerk Authentication Not Working

**Symptoms:**
- Users can't log in
- Authentication errors in console
- "Clerk session timed out" messages

**Solutions:**

1. **Check Environment Variables:**
   ```bash
   # Ensure .env file exists with:
   VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_key_here
   VITE_BACKEND_URL=http://your-backend-url
   ```

2. **Verify Clerk Configuration:**
   - Check if Clerk publishable key is correct
   - Ensure Clerk application is properly configured
   - Verify allowed origins in Clerk dashboard

3. **Clear Browser Data:**
   - Clear localStorage: `localStorage.clear()`
   - Clear cookies for the domain
   - Try incognito/private browsing

4. **Debug Authentication:**
   ```javascript
   // Open browser console and run:
   debugAuth();
   debugToken();
   ```

### 2. API Connection Issues

**Symptoms:**
- API calls failing
- Network errors
- 401/403/500 status codes

**Solutions:**

1. **Check Backend URL:**
   ```bash
   # Ensure VITE_BACKEND_URL is set correctly
   echo $VITE_BACKEND_URL
   ```

2. **Test Backend Connectivity:**
   ```javascript
   // In browser console:
   debugAPI();
   ```

3. **Verify CORS Configuration:**
   - Ensure backend allows requests from frontend domain
   - Check if credentials are being sent properly

4. **Check Network Tab:**
   - Open browser dev tools
   - Go to Network tab
   - Look for failed requests and their status codes

### 3. Token Management Issues

**Symptoms:**
- Tokens not being set properly
- Authentication headers missing
- Token refresh failures

**Solutions:**

1. **Check Token Storage:**
   ```javascript
   // In browser console:
   console.log(localStorage.getItem('user'));
   ```

2. **Verify Token Format:**
   - Tokens should be stored as JSON strings
   - Check if token is being parsed correctly

3. **Token Refresh Issues:**
   - Ensure Clerk session is valid
   - Check if `getToken()` is working properly
   - Verify token expiration handling

## Common Error Messages

### "Clerk session timed out, please log in again"
- **Cause:** Token expired or invalid
- **Solution:** Clear localStorage and re-authenticate

### "Authentication required. Please log in again"
- **Cause:** No valid token available
- **Solution:** Ensure user is logged in through Clerk

### "Network error. Please check your connection"
- **Cause:** Backend unreachable or CORS issues
- **Solution:** Check backend URL and CORS configuration

### "ERR_BAD_REQUEST" or "ERR_NETWORK"
- **Cause:** Malformed requests or network issues
- **Solution:** Check request format and network connectivity

## Development Setup

### 1. Environment Setup
```bash
# Copy environment template
cp .env.example .env

# Edit .env with your values:
VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_key
VITE_BACKEND_URL=http://localhost:8000
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```

### 4. Debug Mode
The app includes automatic debugging in development mode. Check browser console for:
- Authentication status
- API connectivity
- Token information

## Production Issues

### 1. Environment Variables
- Ensure all required environment variables are set in production
- Check if variables are properly prefixed with `VITE_`

### 2. Build Issues
```bash
# Clean build
rm -rf dist
npm run build
```

### 3. Deployment Issues
- Check if static files are being served correctly
- Verify environment variables in deployment platform
- Ensure proper redirects for SPA routing

## Debugging Tools

### Browser Console Commands
```javascript
// Debug authentication
debugAuth();

// Debug API connectivity
debugAPI();

// Debug token information
debugToken();

// Clear all data
localStorage.clear();
```

### Network Debugging
1. Open browser dev tools
2. Go to Network tab
3. Filter by "Fetch/XHR"
4. Look for failed requests
5. Check request/response headers

### Authentication Debugging
1. Check if Clerk elements are loaded
2. Verify token presence in localStorage
3. Test token validity with backend
4. Monitor authentication state changes

## Getting Help

If you're still experiencing issues:

1. **Check the console** for error messages
2. **Run debug commands** in browser console
3. **Check network tab** for failed requests
4. **Verify environment variables** are set correctly
5. **Test in incognito mode** to rule out cache issues

For additional support, check the project's GitHub issues or contact the development team. 