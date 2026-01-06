import React from 'react';
import { Document, Page, Text, View, StyleSheet, renderToBuffer } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        padding: 40,
        fontFamily: 'Helvetica',
        fontSize: 10,
        color: '#333',
        backgroundColor: '#ffffff',
    },
    header: {
        backgroundColor: '#000000',
        padding: '20 40',
        margin: '-40 -40 30 -40',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    logoText: {
        color: '#ffffff',
        fontSize: 24,
        fontFamily: 'Helvetica-Bold',
        letterSpacing: 1,
    },
    title: {
        fontSize: 12,
        fontFamily: 'Helvetica-Bold',
        marginBottom: 20,
        color: '#666',
    },
    infoSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    infoBlock: {
        width: '45%',
    },
    label: {
        fontSize: 8,
        color: '#999',
        marginBottom: 2,
        textTransform: 'uppercase',
    },
    value: {
        fontSize: 10,
        marginBottom: 10,
    },
    addressBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    addressBlock: {
        width: '45%',
    },
    addressHeader: {
        fontSize: 9,
        fontFamily: 'Helvetica-Bold',
        marginBottom: 5,
        color: '#666',
    },
    addressText: {
        fontSize: 9,
        lineHeight: 1.4,
        color: '#444',
    },
    table: {
        marginTop: 20,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    tableHeader: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        paddingVertical: 8,
        backgroundColor: '#f9fafb',
    },
    colDesc: { width: '60%', paddingLeft: 5, fontSize: 8, fontFamily: 'Helvetica-Bold' },
    colQty: { width: '10%', textAlign: 'center', fontSize: 8, fontFamily: 'Helvetica-Bold' },
    colPrice: { width: '15%', textAlign: 'right', fontSize: 8, fontFamily: 'Helvetica-Bold' },
    colTotal: { width: '15%', textAlign: 'right', paddingRight: 5, fontSize: 8, fontFamily: 'Helvetica-Bold' },

    tableRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        paddingVertical: 12,
    },
    cellDesc: { width: '60%', paddingLeft: 5, fontSize: 9, lineHeight: 1.4 },
    cellQty: { width: '10%', textAlign: 'center', fontSize: 9 },
    cellPrice: { width: '15%', textAlign: 'right', fontSize: 9 },
    cellTotal: { width: '15%', textAlign: 'right', paddingRight: 5, fontSize: 9, fontFamily: 'Helvetica-Bold' },

    summarySection: {
        marginTop: 20,
        alignItems: 'flex-end',
    },
    summaryRow: {
        flexDirection: 'row',
        width: '30%',
        justifyContent: 'space-between',
        paddingVertical: 4,
    },
    totalRow: {
        flexDirection: 'row',
        width: '30%',
        justifyContent: 'space-between',
        paddingVertical: 8,
        borderTopWidth: 1,
        borderTopColor: '#000',
        marginTop: 4,
    },
    summaryLabel: { fontSize: 9, color: '#666' },
    summaryValue: { fontSize: 9, fontFamily: 'Helvetica-Bold' },
    totalLabel: { fontSize: 10, fontFamily: 'Helvetica-Bold' },
    totalValue: { fontSize: 10, fontFamily: 'Helvetica-Bold' },

    footer: {
        marginTop: 40,
        borderTopWidth: 1,
        borderTopColor: '#eee',
        paddingTop: 20,
    },
    footerTitle: {
        fontSize: 9,
        fontFamily: 'Helvetica-Bold',
        marginBottom: 10,
        color: '#666',
        textTransform: 'uppercase',
    },
    footerText: {
        fontSize: 8,
        color: '#666',
        lineHeight: 1.4,
        marginBottom: 15,
    },
    bankDetails: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    bankItem: {
        marginRight: 30,
    },
    noteBox: {
        backgroundColor: '#f9fafb',
        padding: 10,
        borderRadius: 4,
    }
});

interface InvoiceProps {
    invoiceNumber: string;
    date: string;
    customerName: string;
    customerEmail: string;
    businessName: string;
    abn: string;
}

const InvoiceDocument = ({ invoiceNumber, date, customerName, customerEmail, businessName, abn }: InvoiceProps) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.header}>
                <Text style={styles.logoText}>KPI DIGITAL</Text>
            </View>

            <Text style={styles.title}>TAX INVOICE</Text>

            <View style={styles.infoSection}>
                <View style={styles.infoBlock}>
                    <Text style={styles.label}>Invoice #:</Text>
                    <Text style={styles.value}>{invoiceNumber}</Text>
                    <Text style={styles.label}>Date:</Text>
                    <Text style={styles.value}>{date}</Text>
                    <Text style={styles.label}>Due Date:</Text>
                    <Text style={styles.value}>ON DELIVERY</Text>
                </View>
            </View>

            <View style={styles.addressBox}>
                <View style={styles.addressBlock}>
                    <Text style={styles.addressHeader}>FROM:</Text>
                    <Text style={styles.addressText}>Louis Stockwell</Text>
                    <Text style={styles.addressText}>152 Blackstone Rd</Text>
                    <Text style={styles.addressText}>Blackstone Heights TAS 7250</Text>
                    <Text style={styles.addressText}>0456 422 216</Text>
                    <Text style={styles.addressText}>louis@kpidigital.com.au</Text>
                </View>
                <View style={styles.addressBlock}>
                    <Text style={styles.addressHeader}>BILL TO:</Text>
                    <Text style={styles.addressText}>{businessName || customerName}</Text>
                    {abn && <Text style={styles.addressText}>ABN: {abn}</Text>}
                    <Text style={styles.addressText}>{customerName}</Text>
                    <Text style={styles.addressText}>{customerEmail}</Text>
                </View>
            </View>

            <View style={styles.table}>
                <View style={styles.tableHeader}>
                    <Text style={styles.colDesc}>DESCRIPTION</Text>
                    <Text style={styles.colQty}>QTY</Text>
                    <Text style={styles.colPrice}>UNIT PRICE</Text>
                    <Text style={styles.colTotal}>TOTAL</Text>
                </View>

                <View style={styles.tableRow}>
                    <Text style={styles.cellDesc}>
                        Comprehensive energy audit conducted to AS/NZS 3598:2014 standards, as required for the TAS PowerSmart program. We provide a deep dive into your site’s heating, cooling, and operational energy profiles. This audit serves as the essential first step for businesses looking to access the Energy Saver Loan Scheme for interest-free upgrades like heat pumps, solar, or insulation.
                    </Text>
                    <Text style={styles.cellQty}>1</Text>
                    <Text style={styles.cellPrice}>$1,000.00</Text>
                    <Text style={styles.cellTotal}>$1,000.00</Text>
                </View>
            </View>

            <View style={styles.summarySection}>
                <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>Subtotal:</Text>
                    <Text style={styles.summaryValue}>$1,000.00</Text>
                </View>
                <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>GST (10%):</Text>
                    <Text style={styles.summaryValue}>$100.00</Text>
                </View>
                <View style={styles.totalRow}>
                    <Text style={styles.totalLabel}>Total Due:</Text>
                    <Text style={styles.totalValue}>$1,100.00</Text>
                </View>
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerTitle}>Payment Terms</Text>
                <Text style={styles.footerText}>Payment is due upon delivery.</Text>

                <Text style={styles.footerTitle}>Bank Details</Text>
                <View style={styles.bankDetails}>
                    <View style={styles.bankItem}>
                        <Text style={styles.label}>Account Name</Text>
                        <Text style={styles.value}>Louis Stockwell</Text>
                    </View>
                    <View style={styles.bankItem}>
                        <Text style={styles.label}>Account Number</Text>
                        <Text style={styles.value}>1166 7608</Text>
                    </View>
                    <View style={styles.bankItem}>
                        <Text style={styles.label}>BSB Number</Text>
                        <Text style={styles.value}>062 692</Text>
                    </View>
                </View>

                <View style={styles.noteBox}>
                    <Text style={styles.footerTitle}>Notes</Text>
                    <Text style={styles.footerText}>
                        Thank you for your business! If you have any questions about this invoice, please contact us at louis@kpidigital.com.au or 0456 422 216.
                    </Text>
                </View>
            </View>
        </Page>
    </Document>
);

export async function generateInvoiceBuffer(props: InvoiceProps) {
    return await renderToBuffer(<InvoiceDocument {...props} />);
}
