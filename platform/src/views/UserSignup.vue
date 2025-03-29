<script>
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export default {
  name: "UserSignup",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signup() {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
        const user = userCredential.user;

        await updateProfile(user, { displayName: this.name });

        alert("Account Created!");
        this.$router.push("/login"); // ✅ Corrected router navigation
      } catch (error) {
        alert("Error: " + error.message);
      }
    },
  },
};
</script>
