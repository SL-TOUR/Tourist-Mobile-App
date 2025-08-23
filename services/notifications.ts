// If you haven't already, install expo-notifications:
// npx expo install expo-notifications
import * as Notifications from 'expo-notifications';

export const scheduleNotification = async (title: string, body: string, trigger: Date) => {
  const now = new Date();
  const seconds = Math.max(1, Math.floor((trigger.getTime() - now.getTime()) / 1000));
  await Notifications.scheduleNotificationAsync({
    content: {
      title,
      body,
      sound: 'default',
    },
    trigger: ({ seconds, repeats: false } as any),
  });
};

export const registerForPushNotifications = async () => {
  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;
  
  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }
  
  if (finalStatus !== 'granted') {
    return;
  }
  
  const token = (await Notifications.getExpoPushTokenAsync()).data;
  return token;
};

export const setupNotificationHandler = () => {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
      shouldShowBanner: true,
      shouldShowList: true,
    }),
  });
};