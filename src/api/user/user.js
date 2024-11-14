import { sendRequest } from '../request';
import { defaultInstance } from '../instance';

export const useUserHook = () => {
  const signUpUser = async formData => {
    const response = await sendRequest(defaultInstance, 'post', '/signup', {
      major: formData.major,
      studentNumber: formData.studentNumber,
      password: formData.userPassword,
      studentName: formData.userName,
    });

    return response;
  };

  const checkId = async studentNumber => {
    try {
      const response = await sendRequest(defaultInstance, 'post', '/duplicate', {
        studentNumber: studentNumber,
      });
      return { success: true, data: response };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  return {
    signUpUser,
    checkId,
  };
};
