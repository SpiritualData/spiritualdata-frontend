// Debug utility for authentication and API issues
export const debugAuth = () => {
  console.group("🔍 Authentication Debug Info");

  // Check environment variables
  const clerkKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  console.log("Clerk Key:", clerkKey ? "✅ Set" : "❌ Missing");
  console.log("Backend URL:", backendUrl || "❌ Not set");

  // Check localStorage
  const userToken = localStorage.getItem("user");
  console.log("User Token:", userToken ? "✅ Present" : "❌ Missing");

  // Check if Clerk is loaded
  const clerkElement = document.querySelector(".cl-rootBox");
  console.log("Clerk Element:", clerkElement ? "✅ Found" : "❌ Not found");

  console.groupEnd();
};

export const debugAPI = async () => {
  console.group("🔍 API Debug Info");

  try {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    if (!backendUrl) {
      console.error("❌ Backend URL not configured");
      console.groupEnd();
      return;
    }

    // Test backend connectivity
    const response = await fetch(`${backendUrl}/health`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("Backend Health Check:", response.ok ? "✅ OK" : "❌ Failed");
    console.log("Status:", response.status);
  } catch (error) {
    console.error("❌ Backend connectivity error:", error);
  }

  console.groupEnd();
};

export const debugToken = () => {
  console.group("🔍 Token Debug Info");

  const token = localStorage.getItem("user");
  if (token) {
    try {
      const parsedToken = JSON.parse(token);
      console.log("Token Type:", typeof parsedToken);
      console.log("Token Length:", parsedToken.length);
      console.log("Token Preview:", parsedToken.substring(0, 20) + "...");
    } catch (error) {
      console.error("❌ Token parsing error:", error);
    }
  } else {
    console.log("❌ No token found in localStorage");
  }

  console.groupEnd();
};

// Auto-debug on development
if (import.meta.env.DEV) {
  // Debug on page load
  window.addEventListener("load", () => {
    setTimeout(() => {
      debugAuth();
      debugAPI();
      debugToken();
    }, 2000);
  });

  // Make debug functions available globally
  (window as any).debugAuth = debugAuth;
  (window as any).debugAPI = debugAPI;
  (window as any).debugToken = debugToken;
}
