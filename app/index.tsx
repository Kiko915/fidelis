import { StatusBar } from 'expo-status-bar';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ComingSoonScreen() {
    return (
        <SafeAreaView style={{ flex: 1 }} className="bg-white dark:bg-black">
            <StatusBar style="auto" />
            <View className="flex-1 justify-center items-center p-4">
                <View className="items-center">
                    {/* Logo */}
                    <Image
                        source={require('@/assets/logo/fidelis_primary.png')}
                        style={{ width: 150, height: 150 }}
                        resizeMode="contain"
                        className="mb-8"
                    />

                    {/* Text Content */}
                    <Text className="text-4xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
                        Fidelis
                    </Text>
                    <View className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full">
                        <Text className="text-sm font-medium text-gray-600 dark:text-gray-300 uppercase tracking-widest">
                            Coming Soon
                        </Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}
