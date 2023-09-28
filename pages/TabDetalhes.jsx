import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Produto from './Produto';
import Vendedor from './Vendedor';
import Detalhes from './Detalhes';
import Comentarios from './Comentarios';
import Duvidas from './Duvidas';

const Tab = createBottomTabNavigator()
export default function TabDetalhes({ route }) {
    const dados = route.params;
    const item = dados.dado
    return (
        <Tab.Navigator>
            <Tab.Screen name={item.nome} component={Produto} initialParams={dados} />
            <Tab.Screen name="Detalhes" component={Detalhes} initialParams={dados} />
            <Tab.Screen name="Vendedor" component={Vendedor} initialParams={dados} />
            <Tab.Screen name="Comentarios" component={Comentarios} initialParams={dados} />
            <Tab.Screen name="Duvidas" component={Duvidas} initialParams={dados} />
        </Tab.Navigator>
    );
}