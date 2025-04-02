import React from "react";
import { Card, CardContent } from "@/components/ui/card";

type DivCompBWPProps = {
  id?: string;
  isDarkMode?: boolean;
  children?: React.ReactNode;
};

const DivCompBWP: React.FC<DivCompBWPProps> = ({ id, isDarkMode = false, children }) => {
  return (
    /**el div de los principal de Biulding info ect */
    <Card
      id={id}
      className={`block p-4 rounded-lg shadow-md max-w-3xl mx-auto main-container ${isDarkMode ? 'dark' : 'light'}`}
    >
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
};

export default DivCompBWP;
