<script>
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default {
  name: "UserLogin",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        await signInWithEmailAndPassword(auth, this.email, this.password);
        alert("Login Successful!");
        this.$router.push("/personal-dashboard"); // ✅ Corrected router navigation
      } catch (error) {
        alert("Error: " + error.message);
      }
    },
  },
};
</script>
