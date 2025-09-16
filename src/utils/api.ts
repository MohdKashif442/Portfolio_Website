// API utility functions for deployment endpoints

export interface DeploymentStatus {
  success: boolean;
  deployId: string;
  status: string;
  url?: string;
  timestamp: string;
  message: string;
}

export const getDeploymentStatus = async (deployId: string): Promise<DeploymentStatus> => {
  try {
    const response = await fetch(`/api/deploy/${deployId}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching deployment status:', error);
    throw error;
  }
};

export const testDeploymentAPI = async () => {
  try {
    const testId = '55795307';
    const result = await getDeploymentStatus(testId);
    console.log('Deployment API test successful:', result);
    return result;
  } catch (error) {
    console.error('Deployment API test failed:', error);
    throw error;
  }
};