import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
    KeyboardAvoidingView,
    Modal,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

interface VerificationModalProps {
  visible: boolean;
  email: string;
  onClose: () => void;
}

export default function VerificationModal({
  visible,
  email,
  onClose,
}: VerificationModalProps) {
  const router = useRouter();
  const [code, setCode] = useState("");
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (visible) {
      setCode("");
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [visible]);

  useEffect(() => {
    if (code.length === 6) {
      setTimeout(() => {
        onClose();
        setCode("");
        router.replace("/");
      }, 300);
    }
  }, [code]);

  const handleChangeText = (text: string) => {
    const digits = text.replace(/[^0-9]/g, "").slice(0, 6);
    setCode(digits);
  };

  const displayEmail = email.length > 24 ? email.slice(0, 24) + "…" : email;

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <TouchableOpacity
          style={styles.backdrop}
          activeOpacity={1}
          onPress={onClose}
        />
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.sheet}>
            {/* Handle bar */}
            <View style={styles.handle} />

            {/* Header */}
            <Text style={styles.title}>Check your email</Text>
            <Text style={styles.subtitle}>
              We sent a 6-digit code to{"\n"}
              <Text style={styles.emailText}>{displayEmail}</Text>
            </Text>

            {/* Hidden input */}
            <TextInput
              ref={inputRef}
              value={code}
              onChangeText={handleChangeText}
              keyboardType="number-pad"
              maxLength={6}
              style={styles.hiddenInput}
              caretHidden
              autoComplete="one-time-code"
            />

            {/* OTP boxes */}
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => inputRef.current?.focus()}
              style={styles.otpRow}
            >
              {Array.from({ length: 6 }).map((_, i) => {
                const isFocused = code.length === i;
                const hasValue = i < code.length;
                return (
                  <View
                    key={i}
                    style={[
                      styles.otpBox,
                      hasValue && styles.otpBoxFilled,
                      isFocused && styles.otpBoxActive,
                    ]}
                  >
                    <Text style={styles.otpDigit}>
                      {hasValue ? code[i] : ""}
                    </Text>
                  </View>
                );
              })}
            </TouchableOpacity>

            {/* Resend */}
            <View style={styles.resendRow}>
              <Text style={styles.resendText}>Didn't get a code? </Text>
              <TouchableOpacity>
                <Text style={styles.resendLink}>Resend</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.45)",
    justifyContent: "flex-end",
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
  },
  sheet: {
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 40,
  },
  handle: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#e5e7eb",
    alignSelf: "center",
    marginBottom: 24,
  },
  title: {
    fontFamily: "Poppins-Bold",
    fontSize: 22,
    color: "#0d132b",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#6b7280",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 32,
  },
  emailText: {
    fontFamily: "Poppins-SemiBold",
    color: "#0d132b",
  },
  hiddenInput: {
    position: "absolute",
    opacity: 0,
    width: 1,
    height: 1,
  },
  otpRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginBottom: 28,
  },
  otpBox: {
    width: 48,
    height: 56,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: "#e5e7eb",
    backgroundColor: "#f6f7fb",
    alignItems: "center",
    justifyContent: "center",
  },
  otpBoxFilled: {
    borderColor: "#6c4ef5",
    backgroundColor: "#ffffff",
  },
  otpBoxActive: {
    borderColor: "#6c4ef5",
    borderWidth: 2,
    backgroundColor: "#ffffff",
  },
  otpDigit: {
    fontFamily: "Poppins-Bold",
    fontSize: 22,
    color: "#0d132b",
  },
  resendRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  resendText: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#6b7280",
  },
  resendLink: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 14,
    color: "#6c4ef5",
  },
});
