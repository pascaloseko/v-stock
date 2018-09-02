const state = {
    funds: 10000,
    stocks: []
};

const mutations = {
    'BUY_STOCK'(state, {stockID, Quantity, stockPrice}) {
        const record = state.stocks.find(element => element.id == stockID);
        if (record) {
            record.quantity += quantity;
        } else {
            state.stocks.push({
                id: stockID,
                quantity: Quantity
            });
        }
        state.funds -= stockPrice * Quantity;
    },
    'SELL_STOCK'(state, { stockID, Quantity, stockPrice}) {
        const record = state.stocks.find(element => element.id == stockID);
        if (record.quantity > Quantity) {
            record.quantity -= Quantity;
        } else {
            state.stocks.splice(state.stocks.indexOf(record), 1);
        }
        state.funds += stockPrice * Quantity;
    },
    'SET_PORTFOLIO' (state, portfolio) {
        state.funds = portfolio.funds;
        state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
    }
};

const actions = {
    sellStock({ commit }, order){
        commit('SELL_STOCK', order);
    }
};

const getters = {
    stockPortfolio(state, getters) {
        return state.stocks.map(stock => {
            const record = getters.stocks.find(element => element.id == stock.id);
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            }
        });
    },
    funds (state) {
        return state.funds
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}